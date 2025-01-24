"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Input } from "../ui/input";

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: (arg0: string) => void;
  disabled?: boolean;
  header: string;
  description?: string;
  title: string;
}

export const RenameModal = ({
  children,
  onConfirm,
  disabled,
  header,
  description,
  title,
}: ConfirmModalProps) => {
  const [newTitle, setNewTitle] = useState(title);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <Input
            disabled={false}
            required
            maxLength={60}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Board title"
        />
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={() => onConfirm(newTitle)}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};