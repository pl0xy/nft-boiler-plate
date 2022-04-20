import { TxResult } from './../store/types';
export const addressZero = '0x' + '0'.repeat(40);
export const SECONFS_IN_DAY = 86400;

export const getTxEventParams = (tx: TxResult, events: string[], params: string[][]) => {
    if (!events.length) return new Error('No Events where giver');
    const returnEvents: { [key: string]: any } = {};
    for (const event of events) {
        const returnValues: { [key: string]: string } = {};
        if (!tx.events || !tx.events[event]) return new Error('Event does not exist on tx receipt.');
        if (!params.length) return new Error('No Parameters where giver');
        for (const param of params) {
            for (const value of param) {
                returnValues[value] = tx.events[event].returnValues[value];
            }
        }

        returnEvents[event] = returnValues;
    }

    return returnEvents;
};

