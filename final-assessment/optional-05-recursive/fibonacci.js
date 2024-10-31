function fibonacci(n) {
    if (n < 0) return undefined; // Mengembalikan undefined untuk bilangan negatif
    if (n === 0) return 0;       // Basis: bilangan Fibonacci ke-0 adalah 0
    if (n === 1) return 1;       // Basis: bilangan Fibonacci ke-1 adalah 1
    return fibonacci(n - 1) + fibonacci(n - 2); // Rekursi
}

// Jangan hapus kode di bawah ini!
export default fibonacci;