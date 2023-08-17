export interface Menu {
  source: string;
  destination: string;
  label: string;
}
const MENU: Menu[] = [
  {
    source: "/danh-sach",
    destination: "/Pages/BookMarks/",
    label: "Danh sách",
  },
];

export { MENU };
