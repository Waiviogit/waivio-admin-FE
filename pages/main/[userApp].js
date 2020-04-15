import { useRouter } from "next/router";
import { connect } from "react-redux";
import withRedirectIfNotAuth from "../../components/HOC/helpers/withRedirectIfNotAuth";
import { getApps } from "../../redux/selectors/userSelectors";
import UserApp from "../../components/UserApp";

const userApp = (props) => {
    const rout = useRouter();
    const app = props.app.find(app => app.name === rout.query.userApp);
    return (
        <UserApp
            className='main__body-content-item'
            key={app._id}
            app={app}
        />
    )
};

const mapStateToProps = (state) => ({
    app: getApps(state),
});

export default connect(mapStateToProps)(withRedirectIfNotAuth(userApp));
