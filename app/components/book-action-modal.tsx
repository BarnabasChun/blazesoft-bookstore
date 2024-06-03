import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface BookActionModalProps {
  isOpen: boolean;
  onClose(): void;
  bookForm: React.ReactNode;
}

function BookActionModal({ isOpen, onClose, bookForm }: BookActionModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-[500px] space-y-4 border bg-white py-6 px-12 rounded">
          <div className="flex justify-end">
            <button onClick={onClose} aria-label="close">
              <XMarkIcon className="size-6 text-grey-500" />
            </button>
          </div>

          {bookForm}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default BookActionModal;