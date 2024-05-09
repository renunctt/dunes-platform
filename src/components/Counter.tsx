import { useEffect, useState } from 'react'

export const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const end = start + 3000; // 3 секунды в миллисекундах
    const step = (targetNumber - count) / ((end - start) / 1000); // Вычисляем шаг на основе времени и разницы в числах

    const intervalId = setInterval(() => {
      if (count < targetNumber) {
        setCount(prevCount => prevCount + step); // Увеличиваем счетчик на шаг
      } else {
        clearInterval(intervalId); // Очищаем интервал, когда достигнем целевого числа
      }
    }, 100); // Интервал в 100 миллисекунд для плавного изменения числа

    return () => {
      clearInterval(intervalId); // Очистить интервал при размонтировании компонента
    };
  }, [count, targetNumber]);

  return <span>{Math.round(count).toLocaleString()}</span>
};