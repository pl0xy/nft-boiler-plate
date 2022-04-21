import { IModal } from '@/Types'
import { reactive } from 'vue'

export const ui = reactive({
    modalState: {
        show: false,
        content: ''
    },
    openModal(content: string, data?: { [key: string]: string | boolean | number }): void {
        const modal: IModal = {
            show: true,
            content,
            data
        }
        this.modalState = modal
    },
    closeModal(): void {
        const modal = {
            show: false,
            content: ''
        };
        this.modalState = modal
    }
})
