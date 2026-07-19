import getAllMatches from "pattern-collector";
/**
 * Returns all raw import statements present in the file content.
 */
const searchString = /^[ \t]*app\.use\s*\(/gm

const startFunc = ({ inFileContent }) => {
    const matches = getAllMatches({ inFileContent, inSearchString: searchString });
    return matches;
};

export default startFunc
