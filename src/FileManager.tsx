import { FC } from "react";

export interface FileModel {
    id: string;
    name: string;
    path: string;
    isDir: boolean;
    metadata: Record<string, string>;
}
export interface Theme {
    primaryColor: string;
}
export interface FileManagerProps {
    initialPath?: string;
    files?: FileModel[];
    theme?: Theme;
    onUpload?:  (file: File) => Promise<void>;
    onNavigate?: (path: string) => Promise<void>;
    onDownload?: (fileId: string) => Promise<void>;
    onDelete?: (fileId: string) => Promise<void>;
    onRename?: (fileId: string, newName: string) => Promise<void>;
    onCopy?: (fileId: string, newPath: string) => Promise<void>;
    onMove?: (fileId: string, newPath: string) => Promise<void>;
    onClickFile?: (fileId: string) => void;
    onSearch?: (query: string) => Promise<void>;

}

const FileManager: FC<FileManagerProps> = () => {
    return <div>FileManager</div>;
}

export default FileManager;