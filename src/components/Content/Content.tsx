import { Route, Routes } from "react-router-dom";
import Ads from "../../pages/Ads"
import Home from "../../pages/Home";
import Forum from "../../pages/Forum";
import Contacts from "../../pages/Contacts"
import Documents from "../../pages/Documents";
import NotFound from "../../pages/NotFound";

export default function Content() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="forum" element={<Forum />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="documents" element={<Documents />} />
        <Route path="ads" element={<Ads />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}
