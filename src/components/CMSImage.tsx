import * as React from 'react';
import { useState, useRef } from 'react';
import { useCMS } from './CMSContext';
import { Edit, Upload, Link, RotateCcw, Check, X, FileImage } from 'lucide-react';

interface CMSImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  originalSrc: string;
}

export default function CMSImage({ originalSrc, className = '', style, alt, ...props }: CMSImageProps) {
  const { getSrc, isEditMode, updateImage } = useCMS();
  const [showModal, setShowModal] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentSrc = getSrc(originalSrc);

  const handleOpenModal = (e: React.MouseEvent) => {
    if (!isEditMode) return;
    e.preventDefault();
    e.stopPropagation();
    setUrlInput(currentSrc.startsWith('data:') ? '' : currentSrc);
    setError('');
    setShowModal(true);
  };

  const handleCloseModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setShowModal(false);
  };

  const saveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) {
      setError('Please provide a valid URL');
      return;
    }
    updateImage(originalSrc, urlInput.trim());
    setShowModal(false);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    updateImage(originalSrc, originalSrc);
    setShowModal(false);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('File must be an image (PNG, JPG, JPEG, WEBP)');
      return;
    }
    // Limit size to ~5MB for Base64 storage performance
    if (file.size > 5 * 1024 * 1024) {
      setError('Image is too large. Max size is 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      if (base64) {
        updateImage(originalSrc, base64);
        setShowModal(false);
      }
    };
    reader.onerror = () => {
      setError('Error reading file');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const classes = className ? className.split(/\s+/) : [];
  
  // Find image-specific classes
  const imgClasses = classes.filter(c => 
    c.startsWith('object-') || 
    c.startsWith('duration-') || 
    c.startsWith('transition') || 
    c.startsWith('ease-') ||
    c.startsWith('delay-')
  );
  
  // All other classes go to the wrapper div (e.g. position, inset, width, height, aspect-ratio, shadow, border, rounded, bg-)
  const wrapperClasses = classes.filter(c => 
    !c.startsWith('object-') && 
    !c.startsWith('duration-') && 
    !c.startsWith('transition') && 
    !c.startsWith('ease-') &&
    !c.startsWith('delay-')
  );

  const isAbsolute = className.includes('absolute');
  const positionClass = isAbsolute ? 'absolute' : (wrapperClasses.includes('relative') ? '' : 'relative');

  // We should keep rounded classes on both, so the hover overlay matches
  const roundedClasses = classes.filter(c => c.startsWith('rounded'));

  // Split style properties
  const wrapperStyle: React.CSSProperties = {};
  const imgStyle: React.CSSProperties = {};
  
  if (style) {
    Object.keys(style).forEach((key) => {
      const val = (style as any)[key];
      if (['filter', 'mixBlendMode', 'opacity', 'objectFit', 'objectPosition'].includes(key)) {
        (imgStyle as any)[key] = val;
      } else {
        (wrapperStyle as any)[key] = val;
      }
    });
  }

  return (
    <>
      <div 
        className={`${positionClass} ${wrapperClasses.join(' ')} group/cms-img ${isEditMode ? 'cursor-pointer ring-2 ring-dashed ring-amber-500/60 hover:ring-amber-500 hover:scale-[1.01] transition-all duration-300' : ''}`}
        style={wrapperStyle}
        onClick={handleOpenModal}
      >
        <img
          src={currentSrc}
          className={`w-full h-full ${imgClasses.join(' ')} ${roundedClasses.join(' ')}`}
          style={imgStyle}
          alt={alt}
          {...props}
        />
        
        {isEditMode && (
          <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover/cms-img:opacity-100 flex flex-col items-center justify-center gap-2 transition-all duration-300 z-10">
            <div className="bg-amber-500 text-white p-2 rounded-full shadow-lg transform translate-y-2 group-hover/cms-img:translate-y-0 transition-all duration-300">
              <Edit className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-white px-2 py-1 bg-neutral-950/80 rounded-md">
              Edit Image
            </span>
          </div>
        )}
      </div>

      {showModal && (
        <div 
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300 pointer-events-auto"
          onClick={() => handleCloseModal()}
        >
          <div 
            className="bg-[#FCFAF6] border border-neutral-200 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50">
              <div>
                <h3 className="font-heading font-bold text-sm tracking-wide text-neutral-950 uppercase">
                  Modify Website Image
                </h3>
                <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                  Path: {originalSrc}
                </p>
              </div>
              <button 
                onClick={handleCloseModal}
                className="text-neutral-400 hover:text-neutral-700 transition-colors p-1 rounded-lg hover:bg-neutral-100"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-5">
              {/* Preview Area */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500 block">
                  Current Image Preview
                </label>
                <div className="aspect-video w-full bg-neutral-100 rounded-xl overflow-hidden border border-neutral-200 flex items-center justify-center relative">
                  <img 
                    src={currentSrc} 
                    className="max-h-full max-w-full object-contain" 
                    alt="CMS Preview" 
                  />
                  {currentSrc !== originalSrc && (
                    <span className="absolute top-2 right-2 bg-amber-500 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      Modified
                    </span>
                  )}
                </div>
              </div>

              {/* Upload Drag & Drop Area */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500 block">
                  Option 1: Upload New Image
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
                    dragActive
                      ? 'border-amber-500 bg-amber-50/20'
                      : 'border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50/50'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <Upload className="w-6 h-6 text-neutral-400 group-hover:text-neutral-600" />
                  <div>
                    <p className="text-xs font-semibold text-neutral-800">
                      Click to upload or drag & drop
                    </p>
                    <p className="text-[10px] text-neutral-400 font-mono mt-0.5">
                      PNG, JPG, JPEG, WEBP up to 5MB
                    </p>
                  </div>
                </div>
              </div>

              {/* URL Form */}
              <form onSubmit={saveUrl} className="space-y-1.5">
                <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500 block">
                  Option 2: Image URL Link
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-neutral-400">
                      <Link className="w-3.5 h-3.5" />
                    </span>
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      className="w-full bg-white border border-neutral-200 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-amber-500 font-mono text-neutral-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-neutral-900 hover:bg-neutral-800 text-white px-4 rounded-xl text-xs font-mono font-bold tracking-wider uppercase cursor-pointer transition-colors shrink-0"
                  >
                    Save URL
                  </button>
                </div>
              </form>

              {error && (
                <p className="text-red-500 text-[10px] font-mono font-semibold bg-red-50 border border-red-100 px-3 py-1.5 rounded-lg">
                  {error}
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between">
              {currentSrc !== originalSrc ? (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-neutral-500 hover:text-red-600 font-mono text-xs font-bold uppercase transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset to Default
                </button>
              ) : (
                <div />
              )}
              <button
                type="button"
                onClick={() => handleCloseModal()}
                className="bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase cursor-pointer transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
