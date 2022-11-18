// tsc AdvancedTypeScript.ts
//Union types
function orderProduct(orderId) {
    console.log('Ordering product with id', orderId);
}
// 👍
orderProduct(1);
// 👍
orderProduct('123-abc');
// 👎 Argument is not assignable to string | number
//orderProduct({ name: 'foo' });
