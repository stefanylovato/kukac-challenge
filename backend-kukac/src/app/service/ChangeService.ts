class ChangeService {
    calculateChange = (productValue: number, payment: number) => {
        const change = payment - productValue;
        const arrChange = String(change).split('');
        const bills1 = arrChange.pop() || '0';
        const bills10 = arrChange.pop() || '0';
        const bills100 = arrChange.join('') || 0;
    
        return {
            change,
            bills100,
            bills10,
            bills1,
        } 
    }
}
export default new ChangeService();