

interface SearchProps {

    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;

}

const SearchField: React.FC<SearchProps> = ({
    onChange,
    value
}) => {
    return (
        <div>
            <input
            placeholder="Поиск..."
            value={value}
            onChange={onChange}
            />
        </div>
    )
}



export default SearchField