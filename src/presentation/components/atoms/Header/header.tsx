import moment from "moment";

import { ReactComponent as LogoutSVG } from "../../../../assets/logout.svg";
import { useMutation, useQueryClient } from "react-query";
import { clearJwt, deleteUser } from "../../../../data/local-data";
import { useUser } from "../../../../data/queries/user";

const Header = () => {
  const { data: user } = useUser();
  const queryClient = useQueryClient();
  const logoutMutation = useMutation("user", logout, {
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries("user");
    },
  });

  return (
    <header  className="flex w-full fixed top-0">
      <span>
        {user?.name }
      </span>
      <div>
        {moment().format("DD.MM.yyyy")}
        <div onClick={() => {
            logoutMutation.mutate()
        }}>
          Выход
          <LogoutSVG />
        </div>
      </div>
    </header >
  );
};

async function logout() {
  clearJwt();
  deleteUser();
}

export default Header;
