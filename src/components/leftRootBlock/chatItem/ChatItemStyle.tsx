import styled from 'styled-components'

export const Avatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 48px;
    max-width: 48px;
    min-height: 48px;
    max-height:48px;

    font-size: 20px;
    line-height: 1.75rem;
    font-weight: 600;
    color: white;
    
    background-color: rgb(59 130 246);
    border-radius: 50%;
    margin-right: 0.5rem;
    overflow: hidden;
`

export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const BlockText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-width: 0px;
`
export const Text = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
`
export const IconInformation = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    line-height: 1;
    gap: 20px;
`
export const TextName = styled.h2`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
`
export const DataSpan = styled.span`
    margin-left: 4px;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
`
export const NotifSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: right;
    color: white;
    background: rgb(34 197 94);
    border-radius: 50%;
    min-width: 20px;
    min-height: 20px;   
`