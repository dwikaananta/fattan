import { fetchingData } from "../../Helpers";

const Pagination = (props) => {
    const {
        from = false,
        to = false,
        total = false,
        links = [],
        onChange,
    } = props;

    if (links.length > 0) {
        return (
            <nav aria-label="Page navigation example">
                {from && to && total && (
                    <div className="row mb-2">
                        <div className="col text-center">
                            Dari{" "}
                            <span className="font-weight-bold">{from}</span> s/d{" "}
                            <span className="font-weight-bold">{to}</span>
                        </div>
                        <div className="col text-center">
                            Total data{" "}
                            <span className="font-weight-bold">{total}</span>
                        </div>
                    </div>
                )}
                <ul className="pagination">
                    {links.map((i, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    i.active ? "page-item active" : "page-item"
                                }
                            >
                                <button
                                    onClick={() => {
                                        if (i.url) {
                                            let page = i.url.split("?page=");
                                            page = page[1];
                                            onChange(page);
                                            fetchingData();
                                        }
                                        // }} className="page-link" dangerouslySetInnerHTML={{__html: i.label}}></button>
                                    }}
                                    className="page-link"
                                >
                                    {(() => {
                                        if (i.label === "&laquo; Previous") {
                                            return (
                                                <span aria-hidden="true">
                                                    &laquo;
                                                </span>
                                            );
                                        } else if (i.label === "Next &raquo;") {
                                            return (
                                                <span aria-hidden="true">
                                                    &raquo;
                                                </span>
                                            );
                                        } else {
                                            return i.label;
                                        }
                                    })()}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    } else {
        return "";
    }
};

export default Pagination;
