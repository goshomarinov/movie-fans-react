
export const paginator = (value) => {
    const buttons = [];

    for (let i = 1; i <= value; i++) {
        buttons.push(
            {value: i, index: i}
        )
    }

    return buttons;
}