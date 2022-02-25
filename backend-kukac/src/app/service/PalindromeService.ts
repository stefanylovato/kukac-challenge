class PalindromeService {
    isPalindrome = (n: number) =>{
        const reversed = n.toString().split('').reverse().join('');
        return reversed === n.toString();
    }

    allPalindromes = (initialNumber: number, finalNumber: number) =>{
        const arrPalindromes:Array<number> = []
        for(let i = initialNumber; i <= finalNumber; i++){
            if (this.isPalindrome(i)){
                arrPalindromes.push(i)
            }
        }
        return arrPalindromes
    } 
}
export default new PalindromeService();