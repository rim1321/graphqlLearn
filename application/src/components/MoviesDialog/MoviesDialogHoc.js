import { compose } from 'recompose';
import { moviesQuery } from '../MoviesTable/queries';
import { graphql } from 'react-apollo';
import { deleteMovieMutation } from './mutation';

const withGraphqlDelete = graphql(deleteMovieMutation, {
    props: ({ mutate }) => ({
        deleteMovie: id => mutate({
            variables: id,
            refetchQueries: [{ 
                query: moviesQuery,
                variables: { name: '' }
            }]
        })
    })
});

export default compose(
    withGraphqlDelete
);
