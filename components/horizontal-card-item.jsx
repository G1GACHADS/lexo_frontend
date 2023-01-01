import { useMemo } from 'react'
import styled from 'styled-components/native'

import BaseText from './base-text'
import Status from './status'

import { currencyFormatter } from '../shared/currencyFormatter'
import IconChemicalCategory from './icons/icon-chemical-category'
import IconElectricCategory from './icons/icon-electric-category'
import IconFragileCategory from './icons/icon-fragile-category'
import IconHeavyMaterialsCategory from './icons/icon-heavy-materials-category'

const CoreHorizontalCardItem = styled.Pressable`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`

const CoreHorizontalCardWithStatus = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CoreHorizontalCardImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`

const CoreHorizontalCardContent = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const CategoriesRow = styled.View`
  display: flex;
  flex-direction: row;
`

const CategoriesItem = styled.View`
  margin-right: 5px;
`

export const HorizontalCardItem = ({
  imageURL,
  title,
  subtitle,
  categories,
  priceLabel,
  price,
  status,
  paidAnnually,
  onPress,
}) => {
  const categoryIcons = useMemo(
    () =>
      categories.map(category => {
        if (category === 'fragile') {
          return (
            <CategoriesItem>
              <IconFragileCategory />
            </CategoriesItem>
          )
        }
        if (category === 'electric') {
          return (
            <CategoriesItem>
              <IconElectricCategory />
            </CategoriesItem>
          )
        }
        if (category === 'heavy materials') {
          return (
            <CategoriesItem>
              <IconHeavyMaterialsCategory />
            </CategoriesItem>
          )
        }

        return (
          <CategoriesItem>
            <IconChemicalCategory />
          </CategoriesItem>
        )
      }),
    [categories]
  )

  const statusBadge = useMemo(
    () => (
      <Status
        paid={status === 'paid'}
        returned={status === 'returned'}
        unpaid={status === 'unpaid'}
        cancelled={status === 'cancelled'}
      />
    ),
    [status]
  )

  return (
    <CoreHorizontalCardItem onPress={onPress}>
      <CoreHorizontalCardImage
        source={{ uri: imageURL, cache: 'force-cache' }}
        resizeMode="cover"
      />
      <CoreHorizontalCardContent>
        {status ? (
          <CoreHorizontalCardWithStatus>
            <BaseText semiBold tall md>
              {title.length > 20 ? `${title.slice(0, 20)}...` : title}
            </BaseText>
            {statusBadge}
          </CoreHorizontalCardWithStatus>
        ) : (
          <BaseText semiBold tall md>
            {title}
          </BaseText>
        )}
        <BaseText color="grey3" regular tall sm>
          {subtitle}
        </BaseText>
        <CategoriesRow>
          {categoryIcons.map(icon => (
            <CategoriesItem>{icon}</CategoriesItem>
          ))}
        </CategoriesRow>
        <BaseText regular tall sm>
          {priceLabel}
        </BaseText>
        <BaseText color="primary" semiBold tall md>
          {currencyFormatter(price)}/{paidAnnually ? 'year' : 'month'}
        </BaseText>
      </CoreHorizontalCardContent>
    </CoreHorizontalCardItem>
  )
}

export default HorizontalCardItem
