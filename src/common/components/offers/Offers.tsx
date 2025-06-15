import RenderList from "@/common/helper/RenderList";
import { IOffer } from "@/common/interfaces/form";
import "@/common/components/offers/style.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Offers = () => {
    const data = useSelector((state: RootState) => state.applicationReducer.offers) ?? [];

    return (
        <section className="offers">
            <RenderList
                items={data}
                classes="offers__list"
                renderItem={(_item: IOffer, index) => (
                    <li key={index}>
                    </li>
                )}
            />
        </section>
    )
};

export default Offers;