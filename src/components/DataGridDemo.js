import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { connect } from 'react-redux'
import { updateCart } from '../redux'

const DataGridDemo = ({ columns, rows, updateCart }) => {
    const [select, setSelection] = useState([]);

    useEffect(() => {
        updateCart(select)
    }, [select])

    return (
        <div style={{ height: 600, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                checkboxSelection
                onSelectionChange={(newSelection) => {
                    setSelection(newSelection.rows);
                }}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        updateCart: (select) => dispatch(updateCart(select))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DataGridDemo)