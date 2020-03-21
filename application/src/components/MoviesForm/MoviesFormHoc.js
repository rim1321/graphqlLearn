import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

import { styles } from './styles';
import { addMovieMutation, updateMovieMutation } from './mutations';
import { moviesQuery } from '../MoviesTable/queries';
import { graphql } from 'react-apollo';
import { directorsQuery } from './queries';

const withGraphql = compose(
    graphql(addMovieMutation, {
        props: ({ mutate }) => ({
            addMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{ 
                    query: moviesQuery,
                    variables: { name: '' }
                }]
            })
        })
    }),
    graphql(updateMovieMutation, {
        props: ({ mutate }) => ({
            updateMovie: movie => mutate({
                variables: movie,
                refetchQueries: [{ 
                    query: moviesQuery,
                    variables: { name: '' }
                }]
            })
        })
    }),
    graphql(directorsQuery, {
        options: ({ name = '' }) => ({
            variables: { name },
        }),
    })
);

export default compose(
    withStyles(styles),
    withGraphql
);
