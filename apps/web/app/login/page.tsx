import {Signin} from "../../components/login/login-form";


export default function Page(): JSX.Element {
  return (
      <div className="dark:bg-gray-900" style={
        {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh'
          }
      }>
          <Signin />
      </div>
  );
}
