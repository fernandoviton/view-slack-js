// Walks backwards through the array instead of forward
export const findIndexReverse = (array, predicate) =>
{
	for (var i=array.length - 1; i >= 0; i=i-1)
	{
		if (predicate(array[i]))
			return i
	}
	return -1
}