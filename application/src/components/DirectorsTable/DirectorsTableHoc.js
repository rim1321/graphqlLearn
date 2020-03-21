import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { styles } from './styles';
import { directorsQuery } from './queries';
import { graphql } from 'react-apollo';

const withGraphql = graphql(directorsQuery, {
    options: ({ name = '' }) => ({
        variables: { name },
    }),
});

export default compose(
    withStyles(styles),
    withGraphql  
);
