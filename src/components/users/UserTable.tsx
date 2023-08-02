import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users } from "@/types/User";
import { formatDate } from "../../lib/utils/formatDate";
import { Button } from "../ui/button";
import { FileEdit } from "lucide-react";
import { BsTrash3 } from "react-icons/bs";
import useUsers from "@/hooks/swr/useUsers";
import { toast } from "react-hot-toast";
import DeleteUserModal from "./DeleteUserModal";
import CreateUserModal from "./CreateUserModal";

const UserTable = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    if (typeof error.message === "string") {
      toast.error(error.message);
    } else {
      toast.error("An error occured");
    }
  }

  return (
    <>
      <CreateUserModal />
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden md:table-cell">#</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Created</TableHead>
            <TableHead className="hidden md:table-cell">Updated</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium hidden md:table-cell">{index + 1}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell className="hidden md:table-cell">{formatDate(user.createdAt)}</TableCell>
              <TableCell className="hidden md:table-cell">{formatDate(user.updatedAt)}</TableCell>
              <TableCell className="flex items-center justify-end gap-1">
                <Button variant="secondary" size={"icon"}>
                  <FileEdit />
                </Button>
                {/* <Button variant="destructive" size={"icon"}>
                  <BsTrash3 />
                </Button> */}
                <DeleteUserModal userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default UserTable;

let userList: Users = [
  {
    id: 1,
    email: "cybarra0@sun.com",
    name: "Chandal Ybarra",
    createdAt: "1/14/2023",
    updatedAt: "5/28/2023",
  },
  {
    id: 2,
    email: "jschaben1@webeden.co.uk",
    name: "Jessalyn Schaben",
    createdAt: "10/15/2022",
    updatedAt: "3/29/2023",
  },
  {
    id: 3,
    email: "dopie2@princeton.edu",
    name: "Dion Opie",
    createdAt: "5/24/2023",
    updatedAt: "10/18/2022",
  },
  {
    id: 4,
    email: "mkleiser3@google.com.hk",
    name: "Meggie Kleiser",
    createdAt: "4/27/2023",
    updatedAt: "9/25/2022",
  },
  {
    id: 5,
    email: "dmary4@msu.edu",
    name: "Dennie Mary",
    createdAt: "7/1/2023",
    updatedAt: "3/30/2023",
  },
  {
    id: 6,
    email: "spillington5@pcworld.com",
    name: "Skipp Pillington",
    createdAt: "12/22/2022",
    updatedAt: "5/23/2023",
  },
  {
    id: 7,
    email: "kpignon6@etsy.com",
    name: "Kylen Pignon",
    createdAt: "7/11/2023",
    updatedAt: "5/20/2023",
  },
  {
    id: 8,
    email: "khuburn7@vistaprint.com",
    name: "Kele Huburn",
    createdAt: "1/14/2023",
    updatedAt: "10/25/2022",
  },
  {
    id: 9,
    email: "lfretter8@jugem.jp",
    name: "Linet Fretter",
    createdAt: "11/8/2022",
    updatedAt: "9/22/2022",
  },
  {
    id: 10,
    email: "ccrellin9@ftc.gov",
    name: "Callie Crellin",
    createdAt: "12/18/2022",
    updatedAt: "7/2/2023",
  },
  {
    id: 11,
    email: "bsarsona@reddit.com",
    name: "Byrle Sarson",
    createdAt: "12/31/2022",
    updatedAt: "12/11/2022",
  },
  {
    id: 12,
    email: "gczajkab@live.com",
    name: "Garrot Czajka",
    createdAt: "3/11/2023",
    updatedAt: "12/10/2022",
  },
  {
    id: 13,
    email: "ioduanec@goo.gl",
    name: "Irvine O'Duane",
    createdAt: "12/16/2022",
    updatedAt: "11/4/2022",
  },
  {
    id: 14,
    email: "nredsalld@usda.gov",
    name: "Nowell Redsall",
    createdAt: "12/28/2022",
    updatedAt: "1/2/2023",
  },
  {
    id: 15,
    email: "lheighte@geocities.com",
    name: "Lindie Height",
    createdAt: "4/14/2023",
    updatedAt: "3/25/2023",
  },
  {
    id: 16,
    email: "sprantlf@virginia.edu",
    name: "Shani Prantl",
    createdAt: "3/17/2023",
    updatedAt: "12/28/2022",
  },
  {
    id: 17,
    email: "ocowgillg@hhs.gov",
    name: "Ozzy Cowgill",
    createdAt: "11/18/2022",
    updatedAt: "5/10/2023",
  },
  {
    id: 18,
    email: "schaperlingh@issuu.com",
    name: "Sig Chaperling",
    createdAt: "1/5/2023",
    updatedAt: "8/23/2022",
  },
  {
    id: 19,
    email: "remeneyi@prnewswire.com",
    name: "Ramsey Emeney",
    createdAt: "9/26/2022",
    updatedAt: "4/6/2023",
  },
  {
    id: 20,
    email: "mmurneyj@npr.org",
    name: "Magdalen Murney",
    createdAt: "1/20/2023",
    updatedAt: "10/20/2022",
  },
  {
    id: 21,
    email: "ahopewellk@salon.com",
    name: "Averill Hopewell",
    createdAt: "10/13/2022",
    updatedAt: "4/14/2023",
  },
  {
    id: 22,
    email: "bdeacockl@lulu.com",
    name: "Balduin Deacock",
    createdAt: "8/5/2022",
    updatedAt: "10/28/2022",
  },
  {
    id: 23,
    email: "alympanym@npr.org",
    name: "Aubert Lympany",
    createdAt: "6/30/2023",
    updatedAt: "12/11/2022",
  },
  {
    id: 24,
    email: "enoen@fda.gov",
    name: "Editha Noe",
    createdAt: "7/31/2023",
    updatedAt: "5/26/2023",
  },
  {
    id: 25,
    email: "kandriolettio@google.es",
    name: "Klara Andrioletti",
    createdAt: "3/20/2023",
    updatedAt: "9/5/2022",
  },
  {
    id: 26,
    email: "jwelbandp@engadget.com",
    name: "Jayson Welband",
    createdAt: "6/6/2023",
    updatedAt: "6/19/2023",
  },
  {
    id: 27,
    email: "mvaughtonq@google.ca",
    name: "Minerva Vaughton",
    createdAt: "1/24/2023",
    updatedAt: "11/29/2022",
  },
  {
    id: 28,
    email: "tpeacer@homestead.com",
    name: "Terence Peace",
    createdAt: "2/2/2023",
    updatedAt: "2/17/2023",
  },
  {
    id: 29,
    email: "anobess@sourceforge.net",
    name: "Alexis Nobes",
    createdAt: "9/22/2022",
    updatedAt: "12/14/2022",
  },
  {
    id: 30,
    email: "dkentont@youtu.be",
    name: "Dirk Kenton",
    createdAt: "6/14/2023",
    updatedAt: "9/30/2022",
  },
  {
    id: 31,
    email: "ccecchetelliu@ted.com",
    name: "Cary Cecchetelli",
    createdAt: "6/6/2023",
    updatedAt: "1/16/2023",
  },
  {
    id: 32,
    email: "sstokeyv@wsj.com",
    name: "Simona Stokey",
    createdAt: "9/18/2022",
    updatedAt: "5/27/2023",
  },
  {
    id: 33,
    email: "eklempkew@sina.com.cn",
    name: "Evered Klempke",
    createdAt: "8/20/2022",
    updatedAt: "3/11/2023",
  },
  {
    id: 34,
    email: "jheliarx@blogtalkradio.com",
    name: "Joseito Heliar",
    createdAt: "2/19/2023",
    updatedAt: "2/6/2023",
  },
  {
    id: 35,
    email: "tcresery@java.com",
    name: "Thorpe Creser",
    createdAt: "6/4/2023",
    updatedAt: "6/25/2023",
  },
  {
    id: 36,
    email: "jondrusekz@icio.us",
    name: "Jamesy Ondrusek",
    createdAt: "3/5/2023",
    updatedAt: "10/21/2022",
  },
  {
    id: 37,
    email: "mryce10@foxnews.com",
    name: "Marion Ryce",
    createdAt: "3/28/2023",
    updatedAt: "4/29/2023",
  },
  {
    id: 38,
    email: "vellul11@myspace.com",
    name: "Valentina Ellul",
    createdAt: "2/15/2023",
    updatedAt: "11/11/2022",
  },
  {
    id: 39,
    email: "tde12@umich.edu",
    name: "Tad De Beneditti",
    createdAt: "9/27/2022",
    updatedAt: "5/27/2023",
  },
  {
    id: 40,
    email: "cdulling13@elegantthemes.com",
    name: "Celine Dulling",
    createdAt: "8/19/2022",
    updatedAt: "8/26/2022",
  },
  {
    id: 41,
    email: "bcammacke14@fc2.com",
    name: "Byrle Cammacke",
    createdAt: "5/17/2023",
    updatedAt: "7/19/2023",
  },
  {
    id: 42,
    email: "iguinan15@indiegogo.com",
    name: "Ivan Guinan",
    createdAt: "4/7/2023",
    updatedAt: "12/20/2022",
  },
  {
    id: 43,
    email: "cclaibourn16@prnewswire.com",
    name: "Celka Claibourn",
    createdAt: "7/7/2023",
    updatedAt: "6/9/2023",
  },
  {
    id: 44,
    email: "dkristof17@feedburner.com",
    name: "Dunstan Kristof",
    createdAt: "6/18/2023",
    updatedAt: "3/3/2023",
  },
  {
    id: 45,
    email: "ggorry18@reddit.com",
    name: "Gillan Gorry",
    createdAt: "1/14/2023",
    updatedAt: "4/12/2023",
  },
  {
    id: 46,
    email: "btullis19@multiply.com",
    name: "Bing Tullis",
    createdAt: "4/14/2023",
    updatedAt: "4/16/2023",
  },
  {
    id: 47,
    email: "ullewellen1a@netlog.com",
    name: "Urbain Llewellen",
    createdAt: "8/4/2022",
    updatedAt: "10/17/2022",
  },
  {
    id: 48,
    email: "fthouless1b@ihg.com",
    name: "Ferne Thouless",
    createdAt: "1/18/2023",
    updatedAt: "5/31/2023",
  },
  {
    id: 49,
    email: "ahazleton1c@edublogs.org",
    name: "Averell Hazleton",
    createdAt: "11/16/2022",
    updatedAt: "4/19/2023",
  },
  {
    id: 50,
    email: "ggirton1d@cdc.gov",
    name: "Gus Girton",
    createdAt: "12/22/2022",
    updatedAt: "5/27/2023",
  },
];
