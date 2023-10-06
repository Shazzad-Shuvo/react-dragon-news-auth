import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            {/* login section */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button className="btn btn-outline btn-info w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline btn-success w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            {/* social link section */}
            <div className="p-4 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Find Us On</h2>
                <a className="flex p-4 rounded-t-lg items-center border" href="">
                    <FaFacebook className="text-2xl text-blue-600 mr-3"></FaFacebook>
                    Facebook
                </a>
                <a className="flex p-4 items-center border-x" href="">
                    <FaTwitter className="text-2xl text-blue-400 mr-3"></FaTwitter>
                    Twitter
                </a>
                <a className="flex p-4 rounded-b-lg items-center border" href="">
                    <FaInstagram className="text-2xl text-red-400 mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>

            {/* q- Zone */}
            <div className="p-4 space-y-3 mb-6 bg-gray-200 ">
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
                <div className="p-2">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;