// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

function render_sql(min_dt) {
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
        FROM raw_ecom.users
        WHERE create_date > "${min_dt}"
    `;

    return sql_template
}

module.exports = { render_sql }	