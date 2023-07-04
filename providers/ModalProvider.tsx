"use client";

import Modal from "@/components/Modal";
import { useState, useEffect } from "react";

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return (
		<>
			<Modal title='Modal' description='Test Modal' isOpen onChange={() => {}}>
				Hello from modal
			</Modal>
		</>
	);
};

export default ModalProvider;
