import { Dialog } from "@headlessui/react";

type CheckoutPopupProps = {
    isOpen: boolean,
    onClose: () => void
}

export default function CheckoutPopup(props: CheckoutPopupProps) {
    return (
      <Dialog open={props.isOpen} onClose={() => props.onClose}>
        <Dialog.Panel>
          <Dialog.Title>Thank you for your purchase</Dialog.Title>
          <button onClick={() => props.onClose()}>Ok</button>
        </Dialog.Panel>
      </Dialog>
    );
}
