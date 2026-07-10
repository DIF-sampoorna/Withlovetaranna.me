import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

interface CMSContextType {
  isAdmin: boolean;
  isEditMode: boolean;
  setEditMode: (val: boolean) => void;
  imageMap: Record<string, string>;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateImage: (originalSrc: string, newSrc: string) => void;
  resetAll: () => void;
  exportConfig: () => string;
  importConfig: (json: string) => boolean;
  getSrc: (originalSrc: string) => string;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cms_is_admin') === 'true';
    }
    return false;
  });

  const [isEditMode, setEditModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cms_is_edit_mode') === 'true' && localStorage.getItem('cms_is_admin') === 'true';
    }
    return false;
  });

  const [imageMap, setImageMap] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cms_image_map');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse cms_image_map', e);
        }
      }
    }
    return {};
  });

  const login = (email: string, password: string): boolean => {
    if (email === 'contact@dif-sampoorna.ngo' && password === 'Test123Test!') {
      setIsAdmin(true);
      localStorage.setItem('cms_is_admin', 'true');
      setEditModeState(true);
      localStorage.setItem('cms_is_edit_mode', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setEditModeState(false);
    localStorage.removeItem('cms_is_admin');
    localStorage.removeItem('cms_is_edit_mode');
  };

  const setEditMode = (val: boolean) => {
    if (isAdmin) {
      setEditModeState(val);
      localStorage.setItem('cms_is_edit_mode', String(val));
    }
  };

  const updateImage = (originalSrc: string, newSrc: string) => {
    const updated = { ...imageMap, [originalSrc]: newSrc };
    setImageMap(updated);
    localStorage.setItem('cms_image_map', JSON.stringify(updated));
  };

  const resetAll = () => {
    setImageMap({});
    localStorage.removeItem('cms_image_map');
  };

  const exportConfig = () => {
    return JSON.stringify(imageMap, null, 2);
  };

  const importConfig = (json: string): boolean => {
    try {
      const parsed = JSON.parse(json);
      if (parsed && typeof parsed === 'object') {
        setImageMap(parsed);
        localStorage.setItem('cms_image_map', JSON.stringify(parsed));
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON schema', e);
    }
    return false;
  };

  const getSrc = (originalSrc: string): string => {
    // If we have an override in our imageMap, return it, otherwise return original
    return imageMap[originalSrc] || originalSrc;
  };

  return (
    <CMSContext.Provider
      value={{
        isAdmin,
        isEditMode,
        setEditMode,
        imageMap,
        login,
        logout,
        updateImage,
        resetAll,
        exportConfig,
        importConfig,
        getSrc,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}
