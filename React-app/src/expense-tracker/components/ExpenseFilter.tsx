
interface Props{
    onSelectCategory: (category: string) => void;
    selectedCategory: string;
}

const ExpenseFilter = ({onSelectCategory}: Props) => {
  return (
    <select  className="form-select" onChange={(event) => onSelectCategory(event.target.value) }>
        <option value="">All Categories</option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
    </select>
  )
}

export default ExpenseFilter