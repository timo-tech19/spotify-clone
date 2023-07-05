"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
	const uploadModal = useUploadModal();

	const onChange = (open: boolean) => {
		if (!open) {
			// reset form
			uploadModal.onClose();
		}
	};

	return (
		<Modal
			title='Upload modal'
			description='Upload modal description'
			isOpen={uploadModal.isOpen}
			onChange={onChange}
		>
			Hello from Upload modal
		</Modal>
	);
};

export default UploadModal;
