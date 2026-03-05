import { camelCaseToPhrase, capitalize } from './stringHelpers';
import path from 'path';

export function parseTestTreeHierarchy(fileName, logger) {
  const testFolder = 'tests';

  const normalizedFileName = fileName.split(path.sep).join('/');

  const testFolderIndex = normalizedFileName.lastIndexOf(`/${testFolder}/`);

  if (testFolderIndex === -1) {
    logger.debug(
      `Could not find '${testFolder}' folder in path: ${normalizedFileName}`,
    );
    return ['Unknown', 'Unknown'];
  }

  const relativePath = normalizedFileName.substring(
    testFolderIndex + testFolder.length + 2,
  );

  const segments = relativePath.split('/');
  const folderSegments = segments.filter(s => !s.includes('.spec.js'));

  const attributes = folderSegments.map(attribute =>
    capitalize(camelCaseToPhrase(attribute)),
  );

  logger.debug(`Parsed test hierarchy: ${JSON.stringify(attributes)}`);

  return attributes;
}
