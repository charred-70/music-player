import React from 'react'
import { Button } from "@/components/ui/button"
import { FileText, X } from "lucide-react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
const FileInput = () => {
    const [files, setFiles] = useState(/**@type {File[]}*/[]);

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e
     */
    const handleFileChange = (e) => {
        if (e.target.files) {
            let filteredFiles = []
            for (let file in e.target.files) {
                if (file.type == "audio/mpeg" || file.type == "audio/mp4" || file.type == "video/mp4") {
                    filteredFiles.push(file)
                }
            }
            if (filteredFiles.length !== e.target.files.length) {
                alert("You did not upload valid audio files")
            }
            setFiles(filteredFiles)
        }
    };

    /**
     * @param {number} index
     */
    const removeFile = (index) => {
        setFiles(files.filter((_, i) => i !== index))
    }
    return (
        <>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button variant="outline">Add Song</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Song Files</DialogTitle>
                            <DialogDescription>
                                Add songs to your player here. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="w-full max-w-sm space-y-2">
                                <Label htmlFor="file-upload">Upload Files</Label>
                                <Input
                                    className="bg-background"
                                    id="file-upload"
                                    multiple
                                    onChange={handleFileChange}
                                    type="file"
                                />
                                {files.length > 0 && (
                                    <div className="space-y-2">
                                        {files.map((file, index) => (
                                            <div
                                                className="flex items-center justify-between rounded-md border p-2"
                                                key={index}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{file.name}</span>
                                                    <span className="text-muted-foreground text-xs">
                                                        ({(file.size / 1024).toFixed(1)} KB)
                                                    </span>
                                                </div>
                                                <Button
                                                    className="h-6 w-6"
                                                    onClick={() => removeFile(index)}
                                                    size="icon"
                                                    type="button"
                                                    variant="ghost"
                                                >
                                                    <X className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    )
}

export default FileInput