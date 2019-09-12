import styled from '../../utils/styled-components'
import Modal from 'styled-react-modal'

export const Wrapper = styled.div`
  user-select: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 0px 0px 8px 0px;
`
export const CreateButton = styled.div`
  display: flex;
  height: 48px;
  width: 48px;
  background: ${({ theme }) => theme.accentColor};
  &:hover {
    background: ${({ theme }) => theme.accentHoverColor};
    transition: all 0.25s ease-in-out;
  }
  color: ${({ theme }) => theme.backgroundColor};
  border-radius: 48px;
  margin: 0px 8px 0px 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 24px;
`

export const NameInput = styled.input`
  background: #2d2d31;
  margin-top: 8px;
  box-sizing: border-box;
  color: #cccccc;
  font-size: 18px;
  padding: 14px;
  display: block;
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 8px;
  border-bottom: none;
  caret-color: #14bca3;
  &:focus {
    outline: none;
  }
`
export const StyledModal = Modal.styled`
  background: ${({ theme }) => theme.backgroundColor};
  opacity: ${(props: { opacity: number }) => props.opacity};
  font-size: 16px;
  padding: 16px;
  transition: opacity ease 200ms;
  border: none;
  border-radius: 8px;
`
