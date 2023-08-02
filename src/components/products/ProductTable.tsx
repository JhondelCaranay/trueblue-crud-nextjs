import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate } from "../utils/formatDate";
import { Products } from "@/types/Product";
import { Button } from "../ui/button";
import { BsTrash3 } from "react-icons/bs";
import { FileEdit } from "lucide-react";

const ProductTable = () => {
  return (
    <Table>
      <TableCaption>A list of your recent users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden md:table-cell">#</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="hidden md:table-cell">Created</TableHead>
          <TableHead className="hidden md:table-cell">Updated</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {productList.map((product, index) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium hidden md:table-cell">{index + 1}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell className="text-right">{product.price}</TableCell>
            <TableCell className="text-right">{product.quantity}</TableCell>
            <TableCell className="hidden md:table-cell">{formatDate(product.createdAt)}</TableCell>
            <TableCell className="hidden md:table-cell">{formatDate(product.updatedAt)}</TableCell>

            <TableCell className="flex items-center justify-end gap-1">
              <Button variant="secondary" size={"icon"}>
                <FileEdit />
              </Button>
              <Button variant="destructive" size={"icon"}>
                <BsTrash3 />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default ProductTable;

let productList: Products = [
  {
    id: 1,
    name: "Melonleaf Nightshade",
    userId: 1,
    price: 98.21,
    quantity: 10,
    createdAt: "5/4/2023",
    updatedAt: "1/4/2023",
  },
  {
    id: 2,
    name: "Ephemerum Moss",
    userId: 1,
    price: 91.18,
    quantity: 8,
    createdAt: "10/2/2022",
    updatedAt: "8/29/2022",
  },
  {
    id: 3,
    name: "Beard Lichen",
    userId: 1,
    price: 97.17,
    quantity: 1,
    createdAt: "2/23/2023",
    updatedAt: "1/21/2023",
  },
  {
    id: 4,
    name: "Eastern Poison Ivy",
    userId: 1,
    price: 95.18,
    quantity: 9,
    createdAt: "8/29/2022",
    updatedAt: "9/15/2022",
  },
  {
    id: 5,
    name: "Intermountain Indian Breadroot",
    userId: 1,
    price: 97.25,
    quantity: 9,
    createdAt: "5/29/2023",
    updatedAt: "7/16/2023",
  },
  {
    id: 6,
    name: "Fringed Orchid",
    userId: 1,
    price: 94.55,
    quantity: 1,
    createdAt: "4/28/2023",
    updatedAt: "7/17/2023",
  },
  {
    id: 7,
    name: "Hampe's Entodon Moss",
    userId: 1,
    price: 91.46,
    quantity: 1,
    createdAt: "10/24/2022",
    updatedAt: "11/6/2022",
  },
  {
    id: 8,
    name: "Alpine Schadonia Lichen",
    userId: 1,
    price: 93.95,
    quantity: 2,
    createdAt: "8/30/2022",
    updatedAt: "9/8/2022",
  },
  {
    id: 9,
    name: "Bulbothrix Lichen",
    userId: 1,
    price: 92.22,
    quantity: 1,
    createdAt: "8/31/2022",
    updatedAt: "7/28/2023",
  },
  {
    id: 10,
    name: "Soft Brome",
    userId: 1,
    price: 90.66,
    quantity: 9,
    createdAt: "7/29/2023",
    updatedAt: "12/14/2022",
  },
  {
    id: 11,
    name: "Dominican Staggerbush",
    userId: 1,
    price: 94.69,
    quantity: 5,
    createdAt: "4/7/2023",
    updatedAt: "5/30/2023",
  },
  {
    id: 12,
    name: "Blue Lawngrass",
    userId: 1,
    price: 95.87,
    quantity: 10,
    createdAt: "10/20/2022",
    updatedAt: "2/9/2023",
  },
  {
    id: 13,
    name: "Western Pearlwort",
    userId: 1,
    price: 95.22,
    quantity: 10,
    createdAt: "5/28/2023",
    updatedAt: "10/14/2022",
  },
  {
    id: 14,
    name: "Johnston's Monkeyflower",
    userId: 1,
    price: 91.37,
    quantity: 7,
    createdAt: "8/6/2022",
    updatedAt: "9/27/2022",
  },
  {
    id: 15,
    name: "Spiny Greasebush",
    userId: 1,
    price: 99.18,
    quantity: 1,
    createdAt: "1/22/2023",
    updatedAt: "9/4/2022",
  },
  {
    id: 16,
    name: "Fanleaf Vervain",
    userId: 1,
    price: 93.44,
    quantity: 4,
    createdAt: "4/22/2023",
    updatedAt: "4/28/2023",
  },
  {
    id: 17,
    name: "California Bastard Toadflax",
    userId: 1,
    price: 90.79,
    quantity: 9,
    createdAt: "1/18/2023",
    updatedAt: "11/18/2022",
  },
  {
    id: 18,
    name: "Pachyphiale Lichen",
    userId: 1,
    price: 99.76,
    quantity: 9,
    createdAt: "8/10/2022",
    updatedAt: "2/19/2023",
  },
  {
    id: 19,
    name: "Kingston Mountain Mousetail",
    userId: 1,
    price: 92.9,
    quantity: 9,
    createdAt: "1/31/2023",
    updatedAt: "3/30/2023",
  },
  {
    id: 20,
    name: "Longstalk Clover",
    userId: 1,
    price: 99.93,
    quantity: 7,
    createdAt: "12/4/2022",
    updatedAt: "12/30/2022",
  },
  {
    id: 21,
    name: "New Mexico Alumroot",
    userId: 1,
    price: 99.85,
    quantity: 1,
    createdAt: "12/10/2022",
    updatedAt: "4/29/2023",
  },
  {
    id: 22,
    name: "Common Barberry",
    userId: 1,
    price: 94.93,
    quantity: 1,
    createdAt: "9/27/2022",
    updatedAt: "10/1/2022",
  },
  {
    id: 23,
    name: "Sierra Madre Larkspur",
    userId: 1,
    price: 98.47,
    quantity: 10,
    createdAt: "12/29/2022",
    updatedAt: "12/28/2022",
  },
  {
    id: 24,
    name: "Jeweled Blazingstar",
    userId: 1,
    price: 95.49,
    quantity: 10,
    createdAt: "3/28/2023",
    updatedAt: "8/31/2022",
  },
  {
    id: 25,
    name: "Hybrid Willow",
    userId: 1,
    price: 93.34,
    quantity: 5,
    createdAt: "6/9/2023",
    updatedAt: "11/15/2022",
  },
  {
    id: 26,
    name: "Hall's California Tea",
    userId: 1,
    price: 93.61,
    quantity: 3,
    createdAt: "7/18/2023",
    updatedAt: "12/11/2022",
  },
  {
    id: 27,
    name: "Fogfruit",
    userId: 1,
    price: 91.12,
    quantity: 7,
    createdAt: "6/3/2023",
    updatedAt: "1/9/2023",
  },
  {
    id: 28,
    name: "Smooth Flatsedge",
    userId: 1,
    price: 94.7,
    quantity: 10,
    createdAt: "2/3/2023",
    updatedAt: "7/4/2023",
  },
  {
    id: 29,
    name: "Whiteflower Leafcup",
    userId: 1,
    price: 93.34,
    quantity: 9,
    createdAt: "7/21/2023",
    updatedAt: "2/22/2023",
  },
  {
    id: 30,
    name: "Goldenweed",
    userId: 1,
    price: 95.89,
    quantity: 4,
    createdAt: "3/4/2023",
    updatedAt: "8/12/2022",
  },
  {
    id: 31,
    name: "Cyanic Milkvetch",
    userId: 1,
    price: 92.49,
    quantity: 1,
    createdAt: "7/31/2023",
    updatedAt: "11/5/2022",
  },
  {
    id: 32,
    name: "Apricot",
    userId: 1,
    price: 92.19,
    quantity: 7,
    createdAt: "1/15/2023",
    updatedAt: "1/1/2023",
  },
  {
    id: 33,
    name: "Synedrella",
    userId: 1,
    price: 97.14,
    quantity: 8,
    createdAt: "6/19/2023",
    updatedAt: "8/26/2022",
  },
  {
    id: 34,
    name: "Nikko Fir",
    userId: 1,
    price: 95.51,
    quantity: 8,
    createdAt: "3/11/2023",
    updatedAt: "7/22/2023",
  },
  {
    id: 35,
    name: "Cup Lichen",
    userId: 1,
    price: 93.26,
    quantity: 8,
    createdAt: "12/14/2022",
    updatedAt: "2/16/2023",
  },
  {
    id: 36,
    name: "Park Rockcress",
    userId: 1,
    price: 91.12,
    quantity: 4,
    createdAt: "11/6/2022",
    updatedAt: "4/12/2023",
  },
  {
    id: 37,
    name: "Lecidella Lichen",
    userId: 1,
    price: 91.77,
    quantity: 1,
    createdAt: "8/6/2022",
    updatedAt: "12/6/2022",
  },
  {
    id: 38,
    name: "Chinese-quince",
    userId: 1,
    price: 94.34,
    quantity: 2,
    createdAt: "3/20/2023",
    updatedAt: "11/22/2022",
  },
  {
    id: 39,
    name: "Hall's Madia",
    userId: 1,
    price: 94.5,
    quantity: 2,
    createdAt: "2/17/2023",
    updatedAt: "8/3/2022",
  },
  {
    id: 40,
    name: "Blackfoot Quillwort",
    userId: 1,
    price: 91.49,
    quantity: 7,
    createdAt: "2/10/2023",
    updatedAt: "12/19/2022",
  },
  {
    id: 41,
    name: "Fountain Thistle",
    userId: 1,
    price: 90.03,
    quantity: 5,
    createdAt: "12/7/2022",
    updatedAt: "9/2/2022",
  },
  {
    id: 42,
    name: "Heartleaf Nettle",
    userId: 1,
    price: 93.73,
    quantity: 10,
    createdAt: "7/17/2023",
    updatedAt: "10/29/2022",
  },
  {
    id: 43,
    name: "Barbgrass",
    userId: 1,
    price: 91.37,
    quantity: 5,
    createdAt: "7/3/2023",
    updatedAt: "2/21/2023",
  },
  {
    id: 44,
    name: "Greasewood",
    userId: 1,
    price: 99.61,
    quantity: 4,
    createdAt: "11/4/2022",
    updatedAt: "11/26/2022",
  },
  {
    id: 45,
    name: "Nelson's Brickellbush",
    userId: 1,
    price: 95.97,
    quantity: 8,
    createdAt: "4/19/2023",
    updatedAt: "1/3/2023",
  },
  {
    id: 46,
    name: "Sphagnum",
    userId: 1,
    price: 92.81,
    quantity: 2,
    createdAt: "5/23/2023",
    updatedAt: "11/3/2022",
  },
  {
    id: 47,
    name: "Hairy False Goldenaster",
    userId: 1,
    price: 96.23,
    quantity: 5,
    createdAt: "7/15/2023",
    updatedAt: "1/29/2023",
  },
  {
    id: 48,
    name: "Australian Indigo",
    userId: 1,
    price: 98.28,
    quantity: 8,
    createdAt: "3/16/2023",
    updatedAt: "4/12/2023",
  },
  {
    id: 49,
    name: "Garland-lily",
    userId: 1,
    price: 91.98,
    quantity: 10,
    createdAt: "6/5/2023",
    updatedAt: "10/10/2022",
  },
  {
    id: 50,
    name: "Nootka Lupine",
    userId: 1,
    price: 91.12,
    quantity: 10,
    createdAt: "9/4/2022",
    updatedAt: "6/11/2023",
  },
];
