import React, { FC } from 'react'

import { usePermission } from './usePermission'

export const Post: FC = () => {
  const { isPermitted } = usePermission()

  return (
    <>
      {isPermitted('post:view') && (
        <article>
          <h5>The Richest Company In History</h5>
          {isPermitted('author:update') && (
            <select>
              <option value="">Author 1</option>
              <option value="">Author 2</option>
              <option value="">Author 3</option>
              <option value="">Author 4</option>
            </select>
          )}
          <p>
            The 17th century was the golden age for European colonialism. Some
            of the biggest companies in world history were created in this time
            period that brought in such levels of revenue that they dwarf
            current super-companies. These levels of revenue would allow some of
            these companies to even become self-governing, often acting outside
            the authority of the country which created them.
          </p>
        </article>
      )}
      {isPermitted('comment:add') && (
        <>
          <span>Comment</span>
          <textarea
            className="u-full-width"
            placeholder="Your thoughts..."
          ></textarea>
          <button type="submit" className="button-primary">
            Add
          </button>
        </>
      )}
      {isPermitted('non:existent') && (
        <p>This is a non-existent action, so it is never shown</p>
      )}
    </>
  )
}
