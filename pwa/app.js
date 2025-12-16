// 温度互转
const cInput = document.getElementById('c');
const fInput = document.getElementById('f');
cInput.addEventListener('input', () => {
  const c = parseFloat(cInput.value);
  if (!isNaN(c)) fInput.value = (c * 9/5 + 32).toFixed(2);
});
fInput.addEventListener('input', () => {
  const f = parseFloat(fInput.value);
  if (!isNaN(f)) cInput.value = ((f - 32) * 5/9).toFixed(2);
});
document.getElementById('swap').addEventListener('click', () => {
  [cInput.value, fInput.value] = [fInput.value, cInput.value];
});

// 注册 Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
