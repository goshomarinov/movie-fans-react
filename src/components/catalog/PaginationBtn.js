import catalogStyles from '../catalog/Catalog.module.css';

export const PaginationBtn = ({ value, paginPage }) => {
    return (
        <button
            className={catalogStyles['pages']}
            onClick={(e) => paginPage(e)}
        >{value.value}
        </button>
    );
}