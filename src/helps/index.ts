import _ from 'lodash'

export const getFieldsData = (fields: any, object: any) => {
    return _.pick(object, fields)
}
