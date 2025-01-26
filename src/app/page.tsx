import { ResponsiveTable } from "@/components/ResponsiveTable";

const columns = [
  {
    field: "name",
    label: "Name",
  },
  {
    field: "surname",
    label: "Surname",
  },
  {
    field: "age",
    label: "Age",
  },
];

const data = [
  {
    name: "Mark",
    surname: "Garsin",
    age: 23,
  },
  {
    name: "Gabriel",
    surname: "Betappi",
    age: 23,
  },
  {
    name: "Gustav",
    surname: "Mahler",
    age: 23,
  },
];

export default function Home() {
  return <ResponsiveTable columns={columns} data={data} />;
}
