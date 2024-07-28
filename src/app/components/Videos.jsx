"use client";

import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_VIDEOS = gql`
  query GetVideos {
    collections {
      data {
        id
        attributes {
          Title
          videos {
            data {
              id
              attributes {
                Title
                createdAt
                locale
                videoURL
                file {
                  data {
                    attributes {
                      url
                      updatedAt
                      previewUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Videos = () => {
  const { loading, error, data } = useQuery(GET_VIDEOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const myData = data.collections.data.map((collection) => ({
    key: collection.id,
    title: collection.attributes.Title,
    videos: collection.attributes.videos.data,
  }));
  return (
    <div>
      {myData.map((collection) => (
        <div key={collection.key}>
          <h2>{collection.title}</h2>
          {collection.videos.map((video) => (
            <div key={video.id}>
              <h3>{video.attributes.Title}</h3>
              <video controls>
                <source
                  src={
                    video.attributes.videoUrl ||
                    video.attributes.file.data?.attributes.url
                  }
                  type="video/mp4"
                />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Videos;
