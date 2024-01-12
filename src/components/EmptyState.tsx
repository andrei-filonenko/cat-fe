import CatInABox from "./CatInABox";

export default function EmptyState() {
    return (
        <div className="emptyState">
            <CatInABox className="illustration" />
            <h1>Your shopping card is empty</h1>
        </div>
    )
}