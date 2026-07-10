import * as React from 'react';
import { useState, useEffect } from 'react';
import { useCMS } from './CMSContext';
import { X, Lock, Eye, EyeOff, ShieldCheck, ToggleLeft, ToggleRight, Database, Download, Upload, RotateCcw, Image, Check, ChevronRight } from 'lucide-react';

interface CMSAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// All original image assets across the website for quick asset management list
const ALL_ASSETS = [
  { path: "/tar-col.png", label: "Main Collage (Hero Section)", category: "Collage" },
  { path: "/tarranalogo.png", label: "NGO Logo (Header)", category: "Brand" },
  { path: "/taranna.png", label: "Taranna Main Portait (Hero/Backgrounds)", category: "About" },
  { path: "/golden-feather-pen.png", label: "Golden Feather Icon", category: "Decor" },
  { path: "/social_ent.jpeg", label: "Social Entrepreneur Card", category: "About" },
  { path: "/Writer.jpg.jpeg", label: "Writer Portfolio Card", category: "About" },
  { path: "/Speaker.JPG.jpeg", label: "Speaker Portfolio Card", category: "About" },
  { path: "/Modle.JPG.jpeg", label: "Model Portfolio Card", category: "About" },
  { path: "/TD-004.jpg.jpeg", label: "Sub-section Portrait 1", category: "Sub-sections" },
  { path: "/TD-263.jpg.jpeg", label: "Sub-section Portrait 2", category: "Sub-sections" },
  { path: "/TD-297.jpg.jpeg", label: "Sub-section Portrait 3", category: "Sub-sections" },
  { path: "/TD-382.jpg.jpeg", label: "Sub-section Portrait 4", category: "Sub-sections" },
  { path: "/NOV00034.JPG.jpeg", label: "Sub-section Portrait 5", category: "Sub-sections" },
  { path: "/NOVA0019.JPG.jpeg", label: "Sub-section Portrait 6", category: "Sub-sections" },
];

export default function CMSAdminModal({ isOpen, onClose }: CMSAdminModalProps) {
  const { 
    isAdmin, 
    isEditMode, 
    setEditMode, 
    login, 
    logout, 
    imageMap, 
    resetAll, 
    exportConfig, 
    importConfig,
    updateImage,
    getSrc
  } = useCMS();

  // Login states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Backup states
  const [backupJson, setBackupJson] = useState('');
  const [backupSuccess, setBackupSuccess] = useState(false);
  const [importError, setImportError] = useState('');

  // Individual asset editing
  const [editingPath, setEditingPath] = useState<string | null>(null);
  const [customUrlInput, setCustomUrlInput] = useState('');

  useEffect(() => {
    if (isOpen) {
      setBackupJson(exportConfig());
      setImportError('');
      setBackupSuccess(false);
      setLoginError('');
    }
  }, [isOpen, imageMap]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const success = login(email, password);
    if (success) {
      setEmail('');
      setPassword('');
    } else {
      setLoginError('Invalid Administrator credentials');
    }
  };

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    setImportError('');
    const success = importConfig(backupJson);
    if (success) {
      setBackupSuccess(true);
      setTimeout(() => setBackupSuccess(false), 3000);
    } else {
      setImportError('Invalid JSON format or schema. Could not import.');
    }
  };

  const handleAssetEditSave = (originalPath: string) => {
    updateImage(originalPath, customUrlInput.trim() || originalPath);
    setEditingPath(null);
  };

  const handleLocalFileChange = (e: React.ChangeEvent<HTMLInputElement>, originalPath: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit');
        return;
      }
      const reader = new FileReader();
      reader.onload = (evt) => {
        const base64 = evt.target?.result as string;
        if (base64) {
          updateImage(originalPath, base64);
          setEditingPath(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300 pointer-events-auto"
      onClick={onClose}
    >
      <div 
        className="bg-[#FCFAF6] border border-neutral-200 w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto max-h-[85vh] animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50">
          <div className="flex items-center gap-3">
            <div className="bg-neutral-900 text-white p-2 rounded-xl">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-base tracking-wider text-neutral-950 uppercase">
                Content Management System (CMS)
              </h2>
              <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                {isAdmin ? 'Authenticated Administrator' : 'Secure Admin Credentials Required'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-700 transition-colors p-2 rounded-xl hover:bg-neutral-100 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Outer Split Pane / Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!isAdmin ? (
            /* SECURE LOGIN CARD */
            <div className="max-w-md mx-auto py-10">
              <div className="bg-white border border-neutral-200/80 rounded-2xl p-8 shadow-sm space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-600">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 tracking-wide text-sm uppercase">
                    Admin Portal Sign In
                  </h3>
                  <p className="text-xs text-neutral-500 font-light max-w-xs mx-auto leading-relaxed">
                    Access control is restricted to <strong>contact@dif-sampoorna.ngo</strong>
                  </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contact@dif-sampoorna.ngo"
                      className="w-full bg-[#FCFAF6] border border-neutral-200 rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:border-neutral-900 font-mono text-neutral-800"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500">
                      Access Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-[#FCFAF6] border border-neutral-200 rounded-xl py-2.5 px-4 text-xs focus:outline-none focus:border-neutral-900 font-mono text-neutral-800 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center text-neutral-400 hover:text-neutral-600 cursor-pointer"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {loginError && (
                    <p className="text-red-500 text-[10px] font-mono font-semibold bg-red-50 border border-red-100 px-3 py-2 rounded-lg text-center">
                      {loginError}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-neutral-950 hover:bg-neutral-800 text-white py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                  >
                    Authenticate
                  </button>
                </form>
              </div>
            </div>
          ) : (
            /* LOGGED IN - DETAILED CMS CONTROL BOARD */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Quick Toggle Controls & Backup */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Mode Panel */}
                <div className="bg-white border border-neutral-200 rounded-2xl p-5 space-y-4 shadow-xs">
                  <h3 className="font-heading font-bold text-xs tracking-wider uppercase text-neutral-500 border-b border-neutral-100 pb-2">
                    Global CMS Modes
                  </h3>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">
                        Interactive Edit Mode
                      </p>
                      <p className="text-[10px] text-neutral-400 font-light">
                        Enables live image-editing hover buttons across the site
                      </p>
                    </div>
                    <button
                      onClick={() => setEditMode(!isEditMode)}
                      className="cursor-pointer transition-colors text-neutral-800"
                    >
                      {isEditMode ? (
                        <ToggleRight className="w-12 h-8 text-amber-500" />
                      ) : (
                        <ToggleLeft className="w-12 h-8 text-neutral-300" />
                      )}
                    </button>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">
                        Admin Session
                      </p>
                      <p className="text-[10px] text-neutral-400 font-light">
                        Authorized to replace assets
                      </p>
                    </div>
                    <button
                      onClick={logout}
                      className="text-[10px] font-mono border border-neutral-200 hover:bg-red-50 hover:text-red-600 px-3 py-1.5 rounded-lg font-bold uppercase cursor-pointer transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>

                {/* Backups Panel */}
                <form onSubmit={handleImport} className="bg-white border border-neutral-200 rounded-2xl p-5 space-y-3.5 shadow-xs">
                  <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
                    <h3 className="font-heading font-bold text-xs tracking-wider uppercase text-neutral-500">
                      CMS Config JSON
                    </h3>
                    <span className="text-[9px] font-mono font-bold text-neutral-400 uppercase bg-neutral-100 px-1.5 py-0.5 rounded-md">
                      {Object.keys(imageMap).length} overrides
                    </span>
                  </div>

                  <p className="text-[10px] text-neutral-500 font-light leading-relaxed">
                    Copy or Paste configuration below to backup, restore, or export image mappings between browsers.
                  </p>

                  <textarea
                    value={backupJson}
                    onChange={(e) => setBackupJson(e.target.value)}
                    rows={6}
                    placeholder="{}"
                    className="w-full bg-[#FCFAF6] border border-neutral-200 rounded-xl p-3 text-[10px] font-mono text-neutral-700 focus:outline-none focus:border-amber-500 resize-none"
                  />

                  {importError && (
                    <p className="text-red-500 text-[9px] font-mono font-semibold bg-red-50 border border-red-100 p-2 rounded-lg">
                      {importError}
                    </p>
                  )}

                  {backupSuccess && (
                    <p className="text-emerald-600 text-[9px] font-mono font-bold bg-emerald-50 border border-emerald-100 p-2 rounded-lg text-center flex items-center justify-center gap-1.5">
                      <Check className="w-3.5 h-3.5" /> Successfully Saved Overrides!
                    </p>
                  )}

                  <div className="flex gap-2 pt-1.5">
                    <button
                      type="submit"
                      className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-white py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Database className="w-3.5 h-3.5" />
                      Apply Config
                    </button>
                    
                    {Object.keys(imageMap).length > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm('Are you absolutely sure you want to restore all images to original defaults?')) {
                            resetAll();
                            setBackupJson('{}');
                          }
                        }}
                        className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 p-2 rounded-xl cursor-pointer transition-colors"
                        title="Reset All to Defaults"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </form>

              </div>

              {/* Right Column: Asset Manager List */}
              <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col shadow-xs max-h-[60vh]">
                <div className="border-b border-neutral-100 pb-2.5 mb-3">
                  <h3 className="font-heading font-bold text-xs tracking-wider uppercase text-neutral-500">
                    Quick Asset Manager
                  </h3>
                  <p className="text-[10px] text-neutral-400 font-light mt-0.5">
                    Modify images instantly without scrolling through screens.
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3.5 pr-1">
                  {ALL_ASSETS.map((asset) => {
                    const isOverridden = !!imageMap[asset.path];
                    const activeSrc = getSrc(asset.path);
                    const isEditing = editingPath === asset.path;

                    return (
                      <div 
                        key={asset.path} 
                        className={`p-3 rounded-xl border transition-all duration-300 ${
                          isEditing 
                            ? 'border-amber-500 bg-amber-50/10' 
                            : 'border-neutral-100 hover:border-neutral-200 hover:bg-neutral-50/40'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {/* Thumbnail */}
                          <div className="w-14 h-14 bg-neutral-100 rounded-lg overflow-hidden flex items-center justify-center border border-neutral-200/80 shrink-0 relative group">
                            <img src={activeSrc} className="max-h-full max-w-full object-contain" alt="Thumbnail" />
                            {isOverridden && (
                              <span className="absolute bottom-0 inset-x-0 bg-amber-500 text-white text-[8px] font-mono font-black uppercase text-center py-0.5">
                                CUSTOM
                              </span>
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-[8px] font-bold text-[#0e5fa3] bg-neutral-100 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                                {asset.category}
                              </span>
                              <span className="font-mono text-[9px] text-neutral-400 truncate max-w-[120px]">
                                {asset.path}
                              </span>
                            </div>
                            <h4 className="text-xs font-semibold text-neutral-800 mt-1 truncate">
                              {asset.label}
                            </h4>

                            {!isEditing ? (
                              <div className="flex gap-2.5 mt-2">
                                <button
                                  onClick={() => {
                                    setEditingPath(asset.path);
                                    setCustomUrlInput(isOverridden ? activeSrc : '');
                                  }}
                                  className="text-[10px] font-mono font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                                >
                                  Swap Image <ChevronRight className="w-3 h-3" />
                                </button>
                                {isOverridden && (
                                  <button
                                    onClick={() => updateImage(asset.path, asset.path)}
                                    className="text-[10px] font-mono font-bold text-neutral-400 hover:text-red-500 flex items-center gap-1 cursor-pointer"
                                  >
                                    Reset
                                  </button>
                                )}
                              </div>
                            ) : (
                              <div className="space-y-2 mt-2.5 pt-2 border-t border-dashed border-neutral-200">
                                {/* Option A: URL Input */}
                                <div className="space-y-1">
                                  <label className="text-[9px] font-mono text-neutral-500 block">
                                    Option 1: Paste Custom URL
                                  </label>
                                  <input
                                    type="url"
                                    value={customUrlInput}
                                    onChange={(e) => setCustomUrlInput(e.target.value)}
                                    placeholder="https://example.com/photo.jpg"
                                    className="w-full bg-[#FCFAF6] border border-neutral-200 rounded-lg py-1.5 px-3 text-[10px] font-mono text-neutral-800 focus:outline-none focus:border-amber-500"
                                  />
                                </div>

                                {/* Option B: File Upload */}
                                <div className="space-y-1">
                                  <label className="text-[9px] font-mono text-neutral-500 block">
                                    Option 2: Upload File
                                  </label>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleLocalFileChange(e, asset.path)}
                                    className="block w-full text-[9px] text-neutral-500 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-0 file:text-[9px] file:font-mono file:font-bold file:bg-neutral-100 file:text-neutral-700 hover:file:bg-neutral-200 file:cursor-pointer"
                                  />
                                </div>

                                <div className="flex gap-2 pt-1">
                                  <button
                                    onClick={() => handleAssetEditSave(asset.path)}
                                    className="bg-neutral-900 text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase hover:bg-neutral-800 cursor-pointer"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => setEditingPath(null)}
                                    className="border border-neutral-200 bg-white text-neutral-600 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase hover:bg-neutral-50 cursor-pointer"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between shrink-0">
          <p className="text-[10px] font-mono text-neutral-400">
            DIF Sampoorna NGO Administrator Console
          </p>
          <button
            onClick={onClose}
            className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase cursor-pointer transition-colors shrink-0"
          >
            Close Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
