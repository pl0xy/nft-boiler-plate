import { IModal } from '@/types';
import { defineStore } from 'pinia'

export const useUi = defineStore('ui', {
    state: () => ({
        modalState: {
            show: false,
            content: '',
        },
    }),
    getters: {
        getIsModalAwake: (state) => state.modalState.show,
        getModal: (state) => state.modalState,
    },
    actions: {
        closeModal(): void {
            const modal = {
                show: false,
                content: '',
            };
            this.modalState = modal;
        },
        openModal(content: string, data?: { [key: string]: string | boolean | number }): void {
            const modal: IModal = {
                show: true,
                content,
                data,
            };
            this.modalState = modal;
        }
    },
});
