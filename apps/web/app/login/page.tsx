import {Card, CardContent,CardTitle} from "../../components/basics/card";
import {Button} from "../../components/basics/buttons";
import {TextInput} from "../../components/basics/text-input";


export default function Page(): JSX.Element {
  return (
     <div style={
         {
            width: "300px",
             height: "100%",
             paddingLeft: "10px",
         }
     }>
         <Card>
             <CardContent>
                <CardTitle>
                    Hello
                </CardTitle>
            </CardContent>
         </Card>
         <Button variant={"primary"} >
                Hello
            </Button>
         <div style={{marginLeft:"10px"}}/>
         <TextInput label={"Hello"} placeholder={"Search.."} />
     </div>
  );
}
