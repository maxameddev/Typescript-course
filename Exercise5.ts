// 1
function echo<T>(input: T): T {
  return input;
}

echo("Hello");
echo(42);
echo([1, 2, 3]);
echo({ id: 1, name: "Ali" });

// 2
interface ApiResult<T> {
  status: string;
  data: T;
}

const result1: ApiResult<string> = { status: "success", data: "Hello" };
const result2: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: { id: 1, name: "Ali" },
};

// 3
function first<T>(items: T[]): T {
  return items[0];
}

first([10, 20, 30]);
first(["Ali", "Amina"]);
first([{ id: 1 }, { id: 2 }]);
