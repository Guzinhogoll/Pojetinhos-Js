//D3
//·	Crie uma automação que calcule a sequencia fibonacci até o número máximo 100.
fibonacci = n => fibonacci2([0, 1], n - 2)

fibonacci2 = (a, n) => n === 0 ? a
    : fibonacci2(a.concat(a[a.length - 2] + a[a.length - 1]), n - 1 )

console.log(...fibonacci(13))