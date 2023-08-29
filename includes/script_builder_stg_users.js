// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

function render_sql(table, min_dt) {
    let sql_template = `
        SELECT id
               , first_name
               , last_name
               , email
               , age
               , gender
               , city
               , country
               , traffic_source
               , create_date
        FROM ${table}
        WHERE create_date > "${min_dt}"
    `;

    return sql_template
}

module.exports = { render_sql }	