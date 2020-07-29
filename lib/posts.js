import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  //GEt file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    //remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    //Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    //Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  //Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  //use gray-matter to parse the post metadata
  const matterResult = matter(fileContents);

  // combine the data with the id
  return {
    id,
    ...matterResult.data,
  };
}

//SEt up for above function if I am useing an external api
// import fetch from 'node-fetch'

// export async function getSortedPostsData() {
//     const res = await fetch('..')
//     return res.json()
// }

//Set-up for querying database directly
// import someDatabaseSDK from 'someDatabaseSDK'

// const databaseClient = someDatabaseSDK.createClient(...)

// export async function getSortedPostsData() {
//     return databaseClient.query('SELECT posts...')
// }
